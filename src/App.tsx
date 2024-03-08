import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { appTheme, muiTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next';


function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <CustomThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Provider store={store}>
        <I18nextProvider i18n={i18n}>
        <Header/>
        </I18nextProvider>
          <Footer />
        </Provider>
      </CustomThemeProvider>
    </ThemeProvider>
  )
}

export default App
