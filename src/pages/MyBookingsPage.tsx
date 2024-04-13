import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import BookingCard from "../components/bookingpage/BookingCard";
import Footer from "../components/layout/Footer";
import image1 from "../components/bookingpage/GD1.jpg";
import image2 from "../components/bookingpage/GD2.jpg";
import image3 from "../components/bookingpage/FD1.jpg";
import image4 from "../components/bookingpage/FD2.jpg";
import MyBookingsTitle from '../components/bookingpage/MyBookingsTitle';
import BookingCardSkeleton from '../components/layout/BookingCardSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalBookings } from '../redux/thunks/fetchPersonalBookings';
import { RootState } from '../redux/store';
import { getCurrentUser } from 'aws-amplify/auth';
import { itenaryDateFormat } from '../utils/util';
import Map from '../components/layout/Map';

export default function MyBookingsPage() {
    const [loginId, setLoginId] = useState<string>("");

    const dispatch = useDispatch();

    const { status, result } = useSelector((state: RootState) => state.personalBookings);

    useEffect(() => {
        if (loginId !== "") {
            dispatch(fetchPersonalBookings({
                url: `${process.env.FETCH_PERSONAL_BOOKINGS}?email=${loginId}`
            }))

        }
    }, [loginId]);

    useEffect(() => {
        console.log
        async function fetchUserSession() {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                console.log(`The username: ${username}`);
                console.log(`The userId: ${userId}`);
                console.log(signInDetails);
                setLoginId(signInDetails?.loginId);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUserSession();
    }, [])

    return (
        <>
            <MyBookingsTitle />
            {status === "loading" ? (
                <Grid container spacing={2}>
                    {Array.from({ length: 2 }).map((_, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <BookingCardSkeleton />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Grid container spacing={2}>
                    {result?.length === 0 && <div>You haven't booked any rooms yet</div>}
                    {result?.length !== 0 && result?.map((booking, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <BookingCard
                                roomName={booking.roomTypeName}
                                roomLocation="Kickdrum"
                                bookingDates={itenaryDateFormat(booking.check_in_date, booking.check_out_date)}
                                costPerNight={booking.total_cost}
                                images={booking.images}
                                booking={booking.status}
                                reservationId={booking.reservationId}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Footer sticky={false} />
        </>
    );
}



