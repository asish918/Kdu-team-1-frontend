import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, RoomResult } from '../../types';
import { fetchRoomResult } from '../thunks/fetchRoomResults';

interface RoomResultState {
    roomResults: RoomResult | null,
    message: string,
    status: APIStatus,
    page: number,
    totalItems: number | null
}

const initialState: RoomResultState = {
    roomResults: null,
    message: "",
    status: null,
    page: 0,
    totalItems: null
}

const roomResultReducer = createSlice({
    name: 'propertyList',
    initialState: initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRoomResult.fulfilled, (state, action: PayloadAction<RoomResult>) => {
            state.roomResults = action.payload;
            state.status = 'success';
            state.message = "Room Results fetched successfully";
            state.page = action.payload.currentPage;
            state.totalItems = action.payload.totalPages;
        });
        builder.addCase(fetchRoomResult.pending, (state) => {
            state.message = "Room Results loading";
            state.status = 'loading';
        });
        builder.addCase(fetchRoomResult.rejected, (state) => {
            state.message = "Error occurred while fetching Room Results";
            state.status = 'error';
        });
    },
});

export const { setPage } = roomResultReducer.actions;
export default roomResultReducer.reducer;

