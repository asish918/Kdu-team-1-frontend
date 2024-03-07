
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { login, logout } from '../slices/authSlice';
import { RootState } from '../store';
import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';

// Styled components for the Header
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

const StyledH3 = styled.h3`
 margin-right: 10px;
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

const StyledButton = styled.button`
 margin-left: 10px;
 padding: 8px 12px;
 font-size: 14px;
 cursor: pointer;
 background-color: ${props => props.theme.colors.primaryNavyBlue};
 color: #fff;
 border: none;
 border-radius: 4px;
`;

const StyledLanguageIcon = styled(LanguageIcon)`
 margin-left: 12px;
`;

// Header component
const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <HeaderContainer>
      <Info>
        <Heading>
          <StyledH1>Kickdrum </StyledH1>
          <StyledH2>Internet Booking Engine</StyledH2>
        </Heading>
      </Info>
      <NavbarActions>
        <StyledH3>MY BOOKINGS</StyledH3>


        <StyledLanguageIcon fontSize="small" />
        <StyledSelect style={{ marginLeft: '0px' }}>
          <option value="en">En</option>
          <option value="fr">Fr</option>
          <option value="in">Hn</option>
        </StyledSelect>

        <StyledSelect>
          <option value="usd">$ USD</option>
          <option value="eur">€ EUR</option>
          <option value="inr">₹ INR</option>
        </StyledSelect>
        <StyledButton onClick={() => (isLoggedIn ? dispatch(logout()) : dispatch(login()))}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </StyledButton>
      </NavbarActions>
    </HeaderContainer>
  );
};

export default Header;

