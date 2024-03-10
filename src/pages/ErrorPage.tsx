// Error Page for all errors in the App
import { ThemeProvider } from "@mui/material";
import styled, { ThemeProvider as CustomThemeProvider } from "styled-components";
import { useRouteError } from "react-router-dom";
import { appTheme, muiTheme } from "../styles/theme";
import { Provider } from "react-redux";
import { GlobalStyle } from "../styles/globalStyles";
import { I18nextProvider, useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { store } from "../store";
import Content from "../components/Content";

interface ErrorInterface {
    statusText: string,
    message: string
}

const ErrorDiv = styled.div`
    height: 100%;
    text-align: center;
    margin-bottom: 50px;
`

export default function ErrorPage() {
    const error = useRouteError() as ErrorInterface;
    console.error(error);
    const { i18n } = useTranslation();

    return (
        <ThemeProvider theme={muiTheme}>
            <CustomThemeProvider theme={appTheme}>
                <GlobalStyle />
                <Provider store={store}>
                    <I18nextProvider i18n={i18n}>
                        <Header />
                        <ErrorDiv id="error-page">
                            <h1>{i18n.t('error.title')}</h1>
                            <p>{i18n.t('error.subtitle')}</p>
                            <p>
                                <i>{error.statusText || error.message}</i>
                            </p>
                        </ErrorDiv>
                        <Content />
                        <Footer />
                    </I18nextProvider>
                </Provider>
            </CustomThemeProvider>
        </ThemeProvider>
    );
}