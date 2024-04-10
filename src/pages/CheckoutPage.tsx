import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getCurrentUser } from "aws-amplify/auth";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/layout/Footer";
import Itinerary from "../components/searchpage/Itinerary";
import PaymentInfo from "../components/searchpage/PaymentInfo";
import Banner from "../components/searchpage/Banner";
import CustomStepper from "../components/searchpage/CustomStepper";
import ContactInfo from "../components/searchpage/Contactinfo"
import CountdownTimer from '../components/searchpage/CountdownTimer';

import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';


const StyledDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
});

const LeftDiv = styled('div')({
    width: '70%',
    marginLeft: '25px',
    marginBottom: '10px',

    '@media (max-width: 768px)': {
        width: '100%',
    },
});

const RightDiv = styled('div')({
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '32px',
    marginLeft: '10px',

    '@media (max-width: 768px)': {
        width: '90%',
    },
});

export default function CheckoutPage() {
    const navigate = useNavigate();

    const propertyConfig = useSelector((state: RootState) => state.propertyConfig.property)
    const itenary = useSelector((state: RootState) => state.itenary)

    useEffect(() => {
        if (itenary.occupancy_tax == null) {
            setTimeout(() => toast.error("Error in Itenary. Please go back and checkout again"), 1000);
        }
    }, [])

    useEffect(() => {
        async function fetchUserSession() {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                console.log(`The username: ${username}`);
                console.log(`The userId: ${userId}`);
                console.log(signInDetails);

            } catch (err) {
                console.log(err);
            }
        }

        fetchUserSession();
    }, [])

    return (
        <>
            <Toaster />
            <Banner imageUrl={propertyConfig.bannerImageUrl} />
            <CustomStepper />
            <CountdownTimer endTime={600} navigateTo="/" />
            <StyledDiv>
                <LeftDiv>
                    <PaymentInfo />
                </LeftDiv>
                <RightDiv>
                    <Itinerary />
                    <ContactInfo />
                </RightDiv>
            </StyledDiv>


            <Footer sticky={false} />

            
        </>
    )
}


