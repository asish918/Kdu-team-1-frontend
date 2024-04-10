import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus } from '../../types';
import { createBooking } from '../thunks/createBooking';

interface BookingConfirmationState {
    result: string | null,
    message: string,
    status: APIStatus
}

const initialState: BookingConfirmationState = {
    result: null,
    message: "",
    status: null,
}

const bookingConfirmation = createSlice({
    name: 'bookingConfirmation',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createBooking.fulfilled, (state, action: PayloadAction<string>) => {
            state.result = action.payload;
            state.status = 'success';
            state.message = "Booking created successfully";
        });
        builder.addCase(createBooking.pending, (state) => {
            state.result = "Room Results loading";
            state.status = 'loading';
        });
        builder.addCase(createBooking.rejected, (state) => {
            state.message = "Error occurred while Booking";
            state.status = 'error';
        });
    },
});

export default bookingConfirmation.reducer;

