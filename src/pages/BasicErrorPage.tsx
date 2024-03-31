// Error Page for all errors in the App
import styled from "styled-components";
import { useRouteError } from "react-router-dom";

interface ErrorInterface {
    statusText: string;
    message: string;
}

const ErrorDiv = styled.div`
  height: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export default function BasicErrorPage() {
    const error = useRouteError() as ErrorInterface;
    console.error(error);

    return (
        <>
            <ErrorDiv id="error-page">
                <h1>Oops!</h1>
                <p>Something went wrong</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </ErrorDiv>
        </>
    );
}
