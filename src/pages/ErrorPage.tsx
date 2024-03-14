// Error Page for all errors in the App
import styled from "styled-components";
import { useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppProvider from "../providers/AppProvider";

interface ErrorInterface {
  statusText: string;
  message: string;
}

const ErrorDiv = styled.div`
  height: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export default function ErrorPage() {
  const error = useRouteError() as ErrorInterface;
  console.error(error);
  const { i18n } = useTranslation();

  return (
    <>
    <AppProvider>
      <ErrorDiv id="error-page">
        <h1>{i18n.t("error.title")}</h1>
        <p>{i18n.t("error.subtitle")}</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </ErrorDiv>
      </AppProvider>
    </>
  );
}
