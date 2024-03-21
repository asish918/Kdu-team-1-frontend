import React from 'react';
import styled from 'styled-components';

// Define the prop types for the Banner component
interface BannerProps {
    imageUrl: string;
}

const BannerImage = styled.img`
    width: 100%;
    height: 192px;
`

// Define the functional component
const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
    return <BannerImage src={imageUrl} alt="Property Image" />;
};

// Export the Banner component
export default Banner;




