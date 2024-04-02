import { ThemeProvider, styled } from "@mui/material";
import FeedbackModal from "../components/searchpage/FeedbackModal";
import { muiTheme } from "../styles/theme";

const FeedbackContainer = styled('div')`
    height: 90%;
`

export default function FeedbackPage() {
    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <FeedbackContainer>
                    <FeedbackModal />
                </FeedbackContainer>
            </ThemeProvider>
        </>
    )
}