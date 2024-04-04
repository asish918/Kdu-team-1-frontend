import  { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getCurrentUser } from "aws-amplify/auth";

import { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

import Footer from "../components/layout/Footer";
import Itinerary from "../components/searchpage/Itinerary";
import PaymentInfo from "../components/searchpage/PaymentInfo";
import Banner from "../components/searchpage/Banner";
import CustomStepper from "../components/searchpage/CustomStepper";
import ContactInfo from "../components/searchpage/Contactinfo"
import CountdownTimer from '../components/searchpage/CountdownTimer';

import FormTrial from '../components/checkoutpage/Form';
import TravelForm from '../components/checkoutpage/TravelForm';
// import PrintComponent from '../components/searchpage/PrintComponent';
// import ZipcodeValidator from '../components/searchpage/ZipcodeValidator';



export default function CheckoutPage() {
    const navigate = useNavigate();

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
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ width: '70%', marginLeft: '25px', marginBottom: '10px' }}>
                    <PaymentInfo />
                    {/* <FormTrial /> */}
                </div>
                <div style={{ width: '25%', display: 'flex', flexDirection: 'column', marginTop: '32px', marginLeft: '10px' }}>
                    {/* <Itinerary /> */}
                    <ContactInfo />

                </div>
            </div>
            

            <Footer sticky={false} />
            
            <CountdownTimer  endTime={600} navigateTo="/" />
        </>
    )
}


