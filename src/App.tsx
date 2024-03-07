import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { appTheme, muiTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CustomThemeProvider theme={appTheme}>
        <GlobalStyle />
        Hello World
      </CustomThemeProvider>
    </ThemeProvider>
  )
}

export default App
