import React from 'react';
import { Grid } from '@mui/material';
import BookingCard from "../components/bookingpage/BookingCard";
import Footer from "../components/layout/Footer";
import image1 from "../components/bookingpage/GD1.jpg";
import image2 from "../components/bookingpage/GD2.jpg";
import image3 from "../components/bookingpage/FD1.jpg";
import image4 from "../components/bookingpage/FD2.jpg";
import MyBookingsTitle from '../components/bookingpage/MyBookingsTitle';


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
    return (
        <>
            <MyBookingsTitle/>
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
            <Footer sticky={false} />
        </>
    );
}

