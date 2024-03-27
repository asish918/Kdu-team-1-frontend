import { ThemeProvider } from "@mui/material";
import { appTheme, muiTheme } from "../styles/theme";
import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18next";
import Header from "../components/layout/Header";
import { PersistGate } from "redux-persist/integration/react";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CustomThemeProvider theme={appTheme}>
        <GlobalStyle />
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <I18nextProvider i18n={i18n}>
              <Header />
              {children}
            </I18nextProvider>
          </Provider>
        </PersistGate>
      </CustomThemeProvider>
    </ThemeProvider>
  );
}
