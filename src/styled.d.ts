import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryNavyBlue: string;
      primaryDeepBlue: string;
      lightGrey: string;
      darkGrey: string;
      modalGrey: string;
      primaryRed: string;
      secondaryBlue: string;
      textBlack: string;
      secondaryNavyBlue: string,
    };
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      primaryNavyBlue: string;
      primaryDeepBlue: string;
      lightGrey: string;
      darkGrey: string;
      modalGrey: string;
      primaryRed: string;
      secondaryBlue: string;
      textBlack: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      primaryNavyBlue?: string;
      primaryDeepBlue?: string;
      lightGrey?: string;
      darkGrey?: string;
      modalGrey?: string;
      primaryRed?: string;
      secondaryBlue?: string;
      textBlack?: string;
    };
  }
}
