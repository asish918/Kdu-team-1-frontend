import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from '../components/landingpage/SearchForm';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Spinner from '../components/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import { ConfigError } from '../constants/errorContants';

// Styled component for the landing page container div
const LandingPageContainer = styled.div<{ $backgroundImageUrl: string; }>`
  background-image: url(${props => props.$backgroundImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px;
  height: 110%;

  @media (max-width: 450px) {
    height: 100%;
    padding: 0;
    background-color: white;
    background-image: none;
  }
`;

const LandingPage: React.FC = () => {
  const bannerImageUrl = useSelector((state: RootState) => state.propertyConfig.property.bannerImageUrl);
  const loading = useSelector((state: RootState) => state.propertyConfig.status);

  useEffect(() => {
    if (loading === "error") {
      throw new Error(ConfigError)
    }
  }, [loading])

  return (
    loading === "loading" ? <Spinner size={100} /> :
      <LandingPageContainer $backgroundImageUrl={bannerImageUrl}>
        <SearchForm />
      </LandingPageContainer>
  );
};

export default LandingPage;
