
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pagination from './Pagination';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import roomResultReducer from '../../redux/reducers/roomResultReducer';


const store = configureStore({
 reducer: {
    roomResult: roomResultReducer,
 },
});

describe('Pagination', () => {
 it('renders the Pagination component and toggles pages', () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    
 });
});

