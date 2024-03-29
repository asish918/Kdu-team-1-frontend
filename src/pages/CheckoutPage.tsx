import Footer from "../components/layout/Footer";
import Itinerary from "../components/searchpage/Itinerary";
import React, { useState } from 'react';
import FeedbackModal from '../components/searchpage/FeedbackModal'; 
import { styled } from '@mui/system';
import Button from '@mui/material/Button';


const CenteredDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%', 
   });

const StyledButton = styled(Button)(({ theme, mt }) => ({
    marginTop: theme.spacing(mt),
   }));

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
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    const handleFeedbackSubmit = (feedback: string, name: string, email: string) => {
       console.log('Feedback submitted:', { feedback, name, email });
       handleClose();
       
    };
    return (
        <>
      <CenteredDiv>
      <div>
        <Itinerary itinerary={itineraryData} />
        <StyledButton variant="outlined" onClick={handleOpen} mt={2}>
         Open Feedback Form
        </StyledButton>
        <FeedbackModal open={open} handleClose={handleClose} onSubmit={handleFeedbackSubmit} />
      </div>
     </CenteredDiv>
        <Footer sticky={false} />
        </>
    )
}