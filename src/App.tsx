import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { appTheme, muiTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";


function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <CustomThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <Header />
          <Footer />
        </Provider>
      </CustomThemeProvider>
    </ThemeProvider>
  )
}

export default App
