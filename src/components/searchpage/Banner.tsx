import React from 'react';

// Define the prop types for the Banner component
interface BannerProps {
 imageUrl: string;
}

// Define the functional component
const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
 return <img src={imageUrl} alt="Property" style={{ width: '100%', height: '192px' }} />;
};

// Export the Banner component
export default Banner;




   