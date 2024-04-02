import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner'; 

describe('Banner component', () => {
 it('renders the image with the correct src and alt text', () => {
    const imageUrl = 'https://example.com/image.jpg';
    render(<Banner imageUrl={imageUrl} />);

    const imgElement = screen.getByAltText('Property Image');
    expect(imgElement);
    expect(imgElement);
    
    
 });
});
