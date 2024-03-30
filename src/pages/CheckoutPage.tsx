import Footer from "../components/layout/Footer";
import Itinerary from "../components/searchpage/Itinerary";
import React, { useState } from 'react';
import FeedbackModal from '../components/searchpage/FeedbackModal';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";


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
    // Todo 
    const itineraryData = {
        dates: 'May 9 - May 16, 2024',
        guests: '1 adult 1 child',
        room: '1 room',
        roomType: 'Executive Room',
        specialPromo: 'Special Promoname',
        subtotal: '$00.00',
        taxes: '$000.00',
        vat: '$000.00',
        dueNow: '$0000.00',
        dueAtResort: '$0000.00',
    };

    const [email, setEmail] = useState<string>("");

    const handleFeedbackSubmit = () => {
        console.log("Hemlo")
    };

    return (
        <>
            <CenteredDiv>
                <div>
                    <Itinerary itinerary={itineraryData} />
                    <EmailContainer>
                        <StyledTextField
                            label="Enter email"
                            variant="outlined"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <StyledButton variant="contained" onClick={handleFeedbackSubmit}>
                            Stay Completed
                        </StyledButton>
                    </EmailContainer>
                </div>
            </CenteredDiv>
            <Footer sticky={false} />
        </>
    )
}