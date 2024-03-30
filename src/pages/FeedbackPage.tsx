import { styled } from "@mui/material";
import Footer from "../components/layout/Footer";
import FeedbackModal from "../components/searchpage/FeedbackModal";
import CustomizedSteppers from "../components/searchpage/CustomSteppers";

const FeedbackContainer = styled('div')`
    height: 90%;
`

export default function FeedbackPage() {
    return (
        <>
            <FeedbackContainer>
                <CustomizedSteppers />
                <FeedbackModal />
            </FeedbackContainer>
            <Footer sticky={true} />
        </>
    )
}