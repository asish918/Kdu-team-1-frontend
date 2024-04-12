import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import BookingCard from "../components/bookingpage/BookingCard";
import Footer from "../components/layout/Footer";
import image1 from "../components/bookingpage/GD1.jpg";
import image2 from "../components/bookingpage/GD2.jpg";
import image3 from "../components/bookingpage/FD1.jpg";
import image4 from "../components/bookingpage/FD2.jpg";
import MyBookingsTitle from '../components/bookingpage/MyBookingsTitle';
import BookingCardSkeleton from '../components/layout/BookingCardSkeleton';

const bookings = [
    {
        roomName: "Grand Deluxe",
        roomLocation: "New York, NY",
        bookingDates: "Jan 23-25",
        costPerNight: 288,
        images: [image1, image2],
        booking: true
    },
    {
        roomName: "Family Deluxe",
        roomLocation: "Los Angeles, CA",
        bookingDates: "Feb 10-12",
        costPerNight: 350,
        images: [image3, image4],
        booking: false
    },
    
];

export default function MyBookingsPage() {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); 
        }, 2000); 
    }, []);

    return (
        <>
            <MyBookingsTitle />
            {loading ? (
                <Grid container spacing={2}>
                    {Array.from({ length: bookings.length }).map((_, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <BookingCardSkeleton />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Grid container spacing={2}>
                    {bookings.map((booking, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <BookingCard
                                roomName={booking.roomName}
                                roomLocation={booking.roomLocation}
                                bookingDates={booking.bookingDates}
                                costPerNight={booking.costPerNight}
                                images={booking.images}
                                booking={booking.booking}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Footer sticky={false} />
        </>
    );
}



