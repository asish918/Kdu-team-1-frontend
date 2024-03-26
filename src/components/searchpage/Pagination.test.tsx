
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pagination from './Pagination';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from 'react-router-dom';

describe('Pagination', () => {
  it('renders the Pagination component and toggles pages', () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <Pagination />
        </AppProvider>
      </BrowserRouter>
    );
  });
});

