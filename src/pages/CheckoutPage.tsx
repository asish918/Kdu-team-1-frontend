import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Button, TextField } from '@mui/material';
import { RootState } from "../redux/store";
import { getCurrentUser } from "aws-amplify/auth";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../utils/util";
import { RequestType } from "../utils/enums";
import { Toaster, toast } from "react-hot-toast";

import Footer from "../components/layout/Footer";
import Itinerary from "../components/searchpage/Itinerary";
import PaymentInfo from "../components/searchpage/PaymentInfo";
import Banner from "../components/searchpage/Banner";
import CustomStepper from "../components/searchpage/CustomStepper";
import ContactInfo from "../components/searchpage/Contactinfo"
import styled from 'styled-components';


const StyledDiv = styled('div')`
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`;

const StyledPaymentInfoContainer = styled('div')`
 width: 70%;
 margin-left: 25px;
 margin-bottom: 10px;
`;

const StyledItineraryContainer = styled('div')`
 width: 25%;
 display: flex;
 flex-direction: column;
 margin-top: 32px;
 margin-left: 10px;
`;

export default function CheckoutPage() {
    const propertyConfig = useSelector((state: RootState) => state.propertyConfig.property)
    
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
            <StyledDiv>
                <StyledPaymentInfoContainer>
                    <PaymentInfo />
                </StyledPaymentInfoContainer>
                <StyledItineraryContainer>
                    <Itinerary />
                    <ContactInfo />
                </StyledItineraryContainer>
            </StyledDiv>

            <Footer sticky={false} />
        </>
    )
}


