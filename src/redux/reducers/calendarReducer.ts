import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, DateList } from '../../types';
import { fetchCalendarDates } from '../thunks/fetchCalendarDates';

interface CalendarConfig {
    dateList: DateList[],
    message: string,
    status: APIStatus
}

const initialState: CalendarConfig = {
    dateList: [],
    message: "",
    status: null,
}

const dateListConfig = createSlice({
    name: 'dateList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCalendarDates.fulfilled, (state, action: PayloadAction<DateList[]>) => {
            state.dateList = action.payload;
            state.status = 'success';
            state.message = "Date List fetched successfully";
        });
        builder.addCase(fetchCalendarDates.pending, (state) => {
            state.message = "Date List loading";
            state.status = 'loading';
        });
        builder.addCase(fetchCalendarDates.rejected, (state) => {
            state.message = "Error occurred while fetching Date List";
            state.status = 'error';
        });
    },
});

export default dateListConfig.reducer;

