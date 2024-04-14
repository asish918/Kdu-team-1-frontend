import Footer from "../components/layout/Footer"
import PrintComponent from "../components/confirmpage/PrintComponent"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchBookingDetails } from "../redux/thunks/fetchBooking";
import ReactGA from 'react-ga4';


export default function ConfirmationPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: `${window.location.pathname}`, title: "Confirmation Page Visit" });
        const queryParams = new URLSearchParams(window.location.search);
        const reservationId = queryParams.get('id');
        dispatch(fetchBookingDetails({
            url: `${process.env.FETCH_BOOKING}?reservationId=${reservationId}`
        }
        ))
    }, [])

    return (
        <div>
            <PrintComponent />
            <Footer sticky={false} />
        </div>
    )
}