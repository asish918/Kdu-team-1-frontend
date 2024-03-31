import Footer from "../components/layout/Footer";
import Itinerary from "../components/searchpage/Itinerary";
import React, { useEffect, useState } from 'react';
import FeedbackModal from '../components/searchpage/FeedbackModal';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Banner from "../components/searchpage/Banner";
import CustomStepper from "../components/searchpage/CustomStepper";
import { getCurrentUser } from "aws-amplify/auth";
import axios from "axios";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../utils/util";
import { RequestType } from "../utils/enums";


const CenteredDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

const StyledTextField = styled(TextField)`
    width: 201px;
    height: 48px;
`;

const StyledButton = styled(Button)`
    height: 54px;
    font-size: 0.7rem;
`;

const EmailContainer = styled('div')`
    display: flex;
    gap: 20px;
    margin-top: 50px;
`

export default function CheckoutPage() {
    const [email, setEmail] = useState<string>("");
    const propertyConfig = useSelector((state: RootState) => state.propertyConfig.property)
    const roomTypeId = useSelector((state: RootState) => state.itenary.room?.roomTypeId);

    const handleFeedbackSubmit = async () => {
        const res = await axiosRequest(urlGenerator(`${process.env.EMAIL_API}?email=${email}&roomTypeId=${roomTypeId}`), RequestType.GET);
        console.log(res.data);
    };

    useEffect(() => {
        async function fetchUserSession() {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                console.log(`The username: ${username}`);
                console.log(`The userId: ${userId}`);
                console.log(signInDetails);
                setEmail(signInDetails?.loginId);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUserSession();
    }, [])

    return (
        <>
            <Banner imageUrl={propertyConfig.bannerImageUrl} />
            <CustomStepper />
            <CenteredDiv>
                <div>
                    <Itinerary />
                    <EmailContainer>
                        <StyledTextField
                            label="Enter email"
                            variant="outlined"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <StyledButton disabled={email.length === 0} variant="contained" onClick={handleFeedbackSubmit}>
                            Stay Completed
                        </StyledButton>
                    </EmailContainer>
                </div>
            </CenteredDiv>
            <Footer sticky={false} />
        </>
    )
}