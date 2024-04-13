import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, PersonalBooking } from '../../types';
import { fetchPersonalBookings } from '../thunks/fetchPersonalBookings';

interface PersonalBookingState {
    result: PersonalBooking[] | null,
    message: string,
    status: APIStatus
}

const initialState: PersonalBookingState = {
    result: null,
    message: "",
    status: null,
}

const personalBookingDetails = createSlice({
    name: 'personalBookingDetails',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPersonalBookings.fulfilled, (state, action: PayloadAction<PersonalBooking[]>) => {
            state.result = action.payload;
            state.status = 'success';
            state.message = "Bookings fetched successfully";
        });
        builder.addCase(fetchPersonalBookings.pending, (state) => {
            state.message = "Loading";
            state.status = 'loading';
        });
        builder.addCase(fetchPersonalBookings.rejected, (state) => {
            state.message = "Error occurred while fetching personal bookings";
            state.status = 'error';
        });
    },
});

export default personalBookingDetails.reducer;

