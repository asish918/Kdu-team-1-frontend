import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from '../components/landingpage/SearchForm';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Footer from '../components/layout/Footer';
import { clearLocalStorage } from '../utils/util';
import ReactGA from "react-ga4";
import Spinner from '../components/layout/Spinner';

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
  const status = useSelector((state: RootState) => state.propertyConfig.status);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: `${window.location.pathname}`, title: "Landing Page Visit" });
    clearLocalStorage();
  }, [])

  return (
    <>
      {
        status === "loading" ?
          <div>
            <Spinner size={40} />
          </div> :
          <>
            <LandingPageContainer $backgroundImageUrl={bannerImageUrl}>
              <SearchForm />
            </LandingPageContainer>
            <Footer sticky={true} />
          </>
      }
    </>
  );
};

export default LandingPage;
