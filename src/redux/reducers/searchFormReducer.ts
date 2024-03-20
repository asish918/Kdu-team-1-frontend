import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchFormState {
    startDate: Date | null;
    endDate: Date | null;
}

const initialState: SearchFormState = {
    startDate: null,
    endDate: null
};

export const searchFormSlice = createSlice({
    name: "searchForm",
    initialState,
    reducers: {
        setStartDatePick: (state, action: PayloadAction<Date>) => {
            state.startDate = action.payload;
        },
        setEndDatePick: (state, action: PayloadAction<Date>) => {
            state.endDate = action.payload;
        }
    },
});

export const { setEndDatePick, setStartDatePick } = searchFormSlice.actions;
export default searchFormSlice.reducer;
