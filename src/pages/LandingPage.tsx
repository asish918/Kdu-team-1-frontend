// src/components/LandingPage.tsx
import React from 'react';
import SearchForm from '../components/SearchForm';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const LandingPage: React.FC = () => {
  const bannerImageUrl = useSelector((state: RootState) => state.propertyConfig.property.bannerImageUrl);
  return (
    <div style={{ backgroundImage: `url(${bannerImageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '7px', height: '100%' }}>
      <SearchForm />
    </div>
  );
};

export default LandingPage;
