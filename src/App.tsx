import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { appTheme, muiTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18next';
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Content from "./components/Content";
import axios from "axios";

// GraphQL Query to fetch a room by it's ID
const ROOMS_QUERY = gql`
 {
  roomById(id: 1){
    room_id
    name
    tenant {
      tenant_id
      firstName
      lastName
    }
  }
 }
`;

function App() {
  const { data, loading, error } = useQuery(ROOMS_QUERY);

  useEffect(() => {
    axios.get(`${process.env.API_URL}`).then(res => console.log(res.data.data)).catch(error => console.log(error));
  }, [])

  useEffect(() => {
    if (!loading) {
      console.log(data)
    }

    if (error) {
      throw error
    }

  }, [loading, error])



  return (
    <ThemeProvider theme={muiTheme}>
      <CustomThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Header />
            <Content />
            <Footer />
          </I18nextProvider>
        </Provider>
      </CustomThemeProvider>
    </ThemeProvider>
  )
}

export default App;
