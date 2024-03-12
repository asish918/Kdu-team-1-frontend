import { ThemeProvider } from "@mui/material";
import { appTheme, muiTheme } from "../styles/theme";
import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "../store";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CustomThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Header />
            {children}
            <Footer />
          </I18nextProvider>
        </Provider>
      </CustomThemeProvider>
    </ThemeProvider>
  );
}
