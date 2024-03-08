import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { login, logout } from '../slices/authSlice';
import { RootState } from '../store';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';


const HeaderContainer = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 20px;
 background-color: white;
 color: ${props => props.theme.colors.primaryDeepBlue};
`;

const Info = styled.div`
 display: flex;
 flex-direction: column;
`;

const NavbarActions = styled.div`
 display: flex;
 align-items: center;
`;

const Heading = styled.div`
 display: flex;
`;

const StyledH1 = styled.h1`
 margin-right: 10px;
`;

const StyledH2 = styled.h2`
 margin: 5px 0;
 font-size: 18px;
 margin-top: 12px;
 color:${props => props.theme.colors.primaryNavyBlue};
`;

const StyledH3 = styled.h3<{view: "desktop" | "mobile";}>`
 margin-right: 10px;
 display: ${props => props.view === "mobile" ? "none" : "block"};

 @media (max-width: 570px) {
   display: ${props => props.view === "desktop" ? "none" : "block"}
 }
`;

const StyledSelect = styled.select`
 margin-right: 10px;
 margin-left: 10px;
 padding: 0px;
 font-size: 14px;
 cursor: pointer;
 background-color: white;
 color: ${props => props.theme.colors.primaryDeepBlue};
 border: none;
 border-radius: 4px;
`;

const StyledButton = styled.button<{view: "desktop" | "mobile";}>`
 margin-left: 10px;
 padding: 8px 12px;
 font-size: 14px;
 cursor: pointer;
 background-color: ${props => props.theme.colors.primaryNavyBlue};
 color: #fff;
 border: none;
 border-radius: 4px;
 display: ${props => props.view === "mobile" ? "none" : "block"};

 @media (max-width: 570px) {
   display: ${props => props.view === "desktop" ? "none" : "block"}
 }
`;

const StyledLanguageIcon = styled(LanguageIcon)`
 margin-left: 12px;
`;
interface MobileMenuProps {
  isOpen: boolean;
 }


const MobileMenuButton = styled(MenuIcon)`
 display: none !important;

 @media (max-width: 570px) {
    display: block !important;
    cursor: pointer;
 }
`;


const MobileMenu = styled.div<MobileMenuProps>`
 display: none;
 flex-direction: column;
 align-items: flex-end;

 @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 70px;
    right: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
 }
`;

// Header component
const Header: React.FC = () => {
 const dispatch: AppDispatch = useDispatch();
 const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
 const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

 const { t,i18n } = useTranslation();
 const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

 const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
 };

 const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
    <HeaderContainer>
      <Info>
        <Heading>
          <StyledH1>{i18n.t('header.title')} </StyledH1>
          <StyledH2>{i18n.t('header.subtitle')}</StyledH2>
        </Heading>
      </Info>
      <NavbarActions>
        
        <StyledH3 view="desktop">{i18n.t('header.myBookings')}</StyledH3>
        <StyledLanguageIcon fontSize="small" />
        <StyledSelect style={{ marginLeft: '0px' }} value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">En</option>
          <option value="fr">Fr</option>
          <option value="hn">Hn</option>
        </StyledSelect>
        <StyledSelect>
          <option value="usd">$ USD</option>
          <option value="eur">€ EUR</option>
          <option value="inr">₹ INR</option>
        </StyledSelect>
        <StyledButton view="desktop" onClick={() => (isLoggedIn ? dispatch(logout()) : dispatch(login()))}>
            {isLoggedIn ? t('header.logout') : t('header.login')}
        </StyledButton>
        <MobileMenuButton onClick={toggleMobileMenu} />

        <MobileMenu isOpen={isMobileMenuOpen}>
          <StyledH3 view="mobile">{i18n.t('header.myBookings')}</StyledH3>
          <StyledButton view="mobile" onClick={() => (isLoggedIn ? dispatch(logout()) : dispatch(login()))}>
            
            {isLoggedIn ? t('header.logout') : t('header.login')}
          </StyledButton>
        </MobileMenu>
        
      </NavbarActions>
    </HeaderContainer>
 );
};

export default Header;









