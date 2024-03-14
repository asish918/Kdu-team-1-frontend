// src/components/LandingPage.tsx
import React from 'react';
import SearchForm from './SearchForm';

import { useSelector } from 'react-redux';
import { RootState } from '../store';
const LandingPage: React.FC = () => {
  const bannerImageUrl = useSelector((state:RootState) => state.hotelPolicies.policies.bannerImageUrl);
 return (
  <div style={{ backgroundImage: `url(${bannerImageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',padding:'7px', height: '100%' }}>
      <SearchForm />    
  </div>
 );
};

export default LandingPage;
