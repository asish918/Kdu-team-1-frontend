import { createTheme } from "@mui/material";
import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  colors: {
    primaryNavyBlue: "#26266D",
    primaryDeepBlue: "#130739",
    lightGrey: "#C1C2C2",
    darkGrey: "#2F2F2F",
    modalGrey: "#006EFF",
    primaryRed: "#D0182B",
    secondaryBlue: "#006EFF",
    textBlack: "#000000",
    secondaryNavyBlue: "#c7c7de",
    stepperGray: "#E4E4E4"
  },
};

const muiTheme = createTheme({
  palette: {
    primary: {
      main: appTheme.colors.primaryNavyBlue,
    },
    secondary: {
      main: appTheme.colors.primaryDeepBlue,
    },
  },
});

export { appTheme, muiTheme };
