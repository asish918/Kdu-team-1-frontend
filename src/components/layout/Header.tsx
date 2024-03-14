import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { login, logout } from "../../redux/reducers/authReducer";
import { RootState } from "../../redux/store";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { setActiveCurrency } from "../../redux/reducers/intelReducer";
import { Currency } from "../../utils/enums";
import {
  Button,
  Drawer,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  color: ${(props) => props.theme.colors.primaryDeepBlue};
  position: sticky;
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

const StyledH1 = styled.h1`
  margin-right: 10px;
`;

const StyledH2 = styled.h2`
  margin: 5px 0;
  font-size: 18px;
  margin-top: 12px;
  color: ${(props) => props.theme.colors.primaryNavyBlue};
`;

const StyledH3 = styled.h3`
  margin-right: 10px;
  text-align: center;
  @media (max-width: 570px) {
    margin-top: 50px;
  }
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
  margin-left: 12px;
`;

const MobileMenuButton = styled(Button)`
  display: none;

  @media (max-width: 570px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const DesktopActions = styled.div`
  display: flex;
  align-items: center;

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

// Header component
const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const activeCurrency = useSelector((state: RootState) => state.intel.activeCurrency)

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setActiveCurrency(e.target.value));
  };

  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    const language = event.target.value as string;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <HeaderContainer>
      <Info>
        <Heading>
          <StyledH1>{i18n.t("header.title")} </StyledH1>
          <StyledH2>{i18n.t("header.subtitle")}</StyledH2>
        </Heading>
      </Info>
      <NavbarActions>
        <DesktopActions>
          <StyledH3>{i18n.t("header.myBookings")}</StyledH3>
          <StyledLanguageIcon fontSize="small" />

          <StyledSelect
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <MenuItem value="en">En</MenuItem>
            <MenuItem value="fr">Fr</MenuItem>
            <MenuItem value="hn">Hn</MenuItem>
          </StyledSelect>

          <StyledSelect value={activeCurrency} onChange={handleCurrencyChange}>
            <MenuItem value={Currency.INR}>₹ INR</MenuItem>
            <MenuItem value={Currency.USD}>$ USD</MenuItem>
            <MenuItem value={Currency.EUR}>€ EUR</MenuItem>
          </StyledSelect>

          <Button
            sx={{ width: 100 }}
            onClick={() =>
              isLoggedIn ? dispatch(logout()) : dispatch(login())
            }
            variant="contained"
          >
            {isLoggedIn ? t("header.logout") : t("header.login")}
          </Button>
        </DesktopActions>

        <MobileMenuButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </MobileMenuButton>

        <MobileDrawer open={open} anchor="right" onClose={toggleDrawer(false)}>
          <StyledH3>{i18n.t("header.myBookings")}</StyledH3>

          <MobileContainer>
            <StyledLanguageIcon fontSize="small" />
            <StyledSelect
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <MenuItem value="en">En</MenuItem>
              <MenuItem value="fr">Fr</MenuItem>
              <MenuItem value="hn">Hn</MenuItem>
            </StyledSelect>
          </MobileContainer>

          <MobileContainer>
            <StyledSelect value={activeCurrency} onChange={handleCurrencyChange}>
              <MenuItem value={Currency.INR}>₹ INR</MenuItem>
              <MenuItem value={Currency.USD}>$ USD</MenuItem>
              <MenuItem value={Currency.EUR}>€ EUR</MenuItem>
            </StyledSelect>
          </MobileContainer>

          <Button
            onClick={() =>
              isLoggedIn ? dispatch(logout()) : dispatch(login())
            }
            variant="contained"
          >
            {isLoggedIn ? t("header.logout") : t("header.login")}
          </Button>
        </MobileDrawer>
      </NavbarActions>
    </HeaderContainer>
  );
};

export default Header;
