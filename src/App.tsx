import { ThemeProvider as CustomThemeProvider, styled } from "styled-components";
import { appTheme, muiTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "./store";

const Header1 = styled.div`
  .kuchbhi {
    background-color: ${props => props.theme.colors.primaryNavyBlue};
  }
  color: red;

`
const Header2 = styled.div`
  color: black;

`

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CustomThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Provider store={store}>
      <Header/>
      <Footer/>
     </Provider>
      </CustomThemeProvider>
    </ThemeProvider>
  )
}

export default App
