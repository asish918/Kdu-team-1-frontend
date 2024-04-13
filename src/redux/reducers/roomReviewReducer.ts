import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, RoomReviews } from '../../types';
import { fetchRoomReviews } from '../thunks/fetchRoomReviews';

interface RoomReviewsState {
    result: RoomReviews[] | null,
    message: string,
    status: APIStatus
}

const initialState: RoomReviewsState = {
    result: null,
    message: "",
    status: null,
}

const roomReviews = createSlice({
    name: 'roomReviews',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRoomReviews.fulfilled, (state, action: PayloadAction<RoomReviews[]>) => {
            state.result = action.payload;
            state.status = 'success';
            state.message = "Room Reviews fetched successfully";
        });
        builder.addCase(fetchRoomReviews.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchRoomReviews.rejected, (state) => {
            state.message = "Error occurred while fetching Room Reviews";
            state.status = 'error';
        });
    },
});

export default roomReviews.reducer;

