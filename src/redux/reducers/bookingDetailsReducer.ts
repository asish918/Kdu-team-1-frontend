import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, BookingDetails } from '../../types';
import { fetchBookingDetails } from '../thunks/fetchBooking';

interface BookingDetailsState {
    result: BookingDetails | null,
    message: string,
    status: APIStatus
}

const initialState: BookingDetailsState = {
    result: null,
    message: "",
    status: null,
}

const bookingDetails = createSlice({
    name: 'bookingReducer',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookingDetails.fulfilled, (state, action: PayloadAction<BookingDetails>) => {
            state.result = action.payload;
            state.status = 'success';
            state.message = "Booking fetched successfully";
        });
        builder.addCase(fetchBookingDetails.pending, (state) => {
            state.message = "Booking loading";
            state.status = 'loading';
        });
        builder.addCase(fetchBookingDetails.rejected, (state) => {
            state.message = "Error occurred while fetching Booking";
            state.status = 'error';
        });
    },
});

export default bookingDetails.reducer;

