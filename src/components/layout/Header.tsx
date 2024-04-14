import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { setActiveCurrency } from "../../redux/reducers/intelReducer";
import { Currency } from "../../utils/enums";
import ReactGA from "react-ga4";

import {
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Popper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurrentUser } from "aws-amplify/auth";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { capitalize } from "../../utils/util";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 20px;
  background-color: white;
  color: ${(props) => props.theme.colors.primaryDeepBlue};

  @media (max-width: 570px) {
    padding-block: 20px;
  }
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
  align-items: center;
  height: 100%;
`;

const StyledHeaderLogo = styled.img`
  height: 100%;
  width: 90px;
  margin-right: 10px;
  cursor: pointer;
`;

const StyledH2 = styled.h2`
  margin: 5px 0;
  font-size: 18px;
  margin-top: 6px;
  color: ${(props) => props.theme.colors.primaryNavyBlue};
`;

const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    margin-left: -5px;

    @media (max-width: 570px) {
      margin-left: 0px;
    }
  }

  fieldset {
    border: none;
    outline: none;
  }
`;

const StyledLanguageIcon = styled(LanguageIcon)`
  /* margin-left: 12px; */
`;

const LanguageDropDown = styled.div`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.primaryDeepBlue};
  }

  width: 100px;
  display: flex;
  justify-content: flex-end;
`

const MobileMenuButton = styled(Button)`
  &.MuiButtonBase-root {
    display: none;
  }

  @media (max-width: 570px) {
     &.MuiButtonBase-root {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;

const DesktopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 570px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: flex-start;
`;

const MobileDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 200px;
    padding-inline: 20px;
    gap: 20px;
  }
`;

const BookingButton = styled(Button)`
  &.MuiButtonBase-root {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.5px;
  }

  @media (max-width: 570px) {
    &.MuiButtonBase-root {
      margin-top: 20px;
    }
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
`

// Header component
const Header: React.FC = () => {
  const [authState, setAuthState] = useState<boolean>(false);
  const [loginId, setLoginId] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    handleClose();
  };


  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const activeCurrency = useSelector((state: RootState) => state.intel.activeCurrency)
  const hotelProperties = useSelector((state: RootState) => state.propertyConfig.property)

  const handleCurrencyChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(setActiveCurrency(e.target.value as string));
  };

  const location = useLocation();

  const handleAuth = () => {

    if (authState) {
      signOut();
      setAuthState(false);
      // Track logout event
      ReactGA.event({
        category: 'User',
        action: 'Logged Out',
        label: 'Header Logout Button'
      });

      if (location.pathname.substring(location.pathname.lastIndexOf('/') + 1) === "my-bookings") {
        navigate(-1);
      }
    } else {
      navigate("/login");
      // Track login event
      ReactGA.event({
        category: 'User',
        action: 'Logged In',
        label: 'Header Login Button'
      });
    }
  }

  const handleMyBooking = () => {
    if (authState) {
      navigate("/my-bookings")
    }
  }

  useEffect(() => {
    async function fetchUserSession() {
      try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        setAuthState(true);
        setLoginId(signInDetails?.loginId);
        console.log(signInDetails)
      } catch (err) {
        console.log(err);
        setAuthState(false);
      }
    }

    fetchUserSession();
  }, [])

  return (
    <HeaderContainer>
      <Info>
        <Heading>
          <StyledHeaderLogo onClick={() => navigate("/")} src={hotelProperties.siteLogoUrl} />
          <StyledH2>{i18n.t("header.subtitle")}</StyledH2>
        </Heading>
      </Info>
      <NavbarActions>
        <DesktopActions>
          {authState && <BookingButton onClick={handleMyBooking}>{i18n.t("header.myBookings")}</BookingButton>}

          <LanguageContainer>
            <LanguageDropDown>
              <IconButton
                color="primary"
                aria-label="language"
                aria-controls="language-menu"
                aria-haspopup="true"
                disableRipple
                onClick={handleClick}
              >
                <StyledLanguageIcon fontSize="small" />
                <Typography>{capitalize(selectedLanguage)}</Typography>
              </IconButton>
              <Popper open={open1} anchorEl={anchorEl} placement="bottom-start">
                <Paper>
                  <Menu
                    id="language-menu"
                    anchorEl={anchorEl}
                    open={open1}
                    onClose={handleClose}
                  >
                    <MenuItem value="en" onClick={() => handleLanguageSelect("en")}>En</MenuItem>
                    <MenuItem value="fr" onClick={() => handleLanguageSelect("fr")}>Fr</MenuItem>
                    <MenuItem value="hn" onClick={() => handleLanguageSelect("hn")}>Hn</MenuItem>
                  </Menu>
                </Paper>
              </Popper>
            </LanguageDropDown>
          </LanguageContainer>

          <StyledSelect value={activeCurrency} onChange={handleCurrencyChange}>
            <MenuItem value={Currency.INR}>₹ INR</MenuItem>
            <MenuItem value={Currency.USD}>$ USD</MenuItem>
            <MenuItem value={Currency.EUR}>€ EUR</MenuItem>
          </StyledSelect>

          <Button
            sx={{ width: 100 }}
            onClick={handleAuth}
            variant="contained"
          >
            {authState ? t("header.logout") : t("header.login")}
          </Button>
        </DesktopActions>

        <MobileMenuButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </MobileMenuButton>

        <MobileDrawer open={open} anchor="right" onClose={toggleDrawer(false)}>
          {authState && <BookingButton>{i18n.t("header.myBookings")}</BookingButton>}

          <MobileContainer>

          </MobileContainer>

          <MobileContainer>
            <StyledSelect value={activeCurrency} onChange={handleCurrencyChange}>
              <MenuItem value={Currency.INR}>₹ INR</MenuItem>
              <MenuItem value={Currency.USD}>$ USD</MenuItem>
              <MenuItem value={Currency.EUR}>€ EUR</MenuItem>
            </StyledSelect>
          </MobileContainer>

          <Button
            onClick={handleAuth}
            variant="contained"
          >
            {authState ? t("header.logout") : t("header.login")}
          </Button>
        </MobileDrawer>
      </NavbarActions>
    </HeaderContainer>
  );
};

export default Header;
